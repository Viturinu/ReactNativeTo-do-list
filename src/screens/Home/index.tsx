import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { CardComponent } from "../../components/CardComponent";
import { EmptyListComponent } from "../../components/EmptyListComponent";
import Logo from "../../assets/todoLogo.svg";
import IconAdd from "../../assets/addIcon.svg"


interface taskObjectScheme {
    taskId: string;
    taskDescription: string;
    done: boolean;
    onClickCheckBox: () => void;
    handleRemoveTask: (taskId: string) => void;
}

export function Home() {

    const [tasksList, setTasksList] = useState<taskObjectScheme[]>([]);
    const [task, setTask] = useState<string>("");

    const [isFocused, setIsFocused] = useState(false);


    function handleCheckBox() {

    }

    function handleAddTask(task: string) {
        if (task === "") {
            Alert.alert("Inserção de dados", "Por favor, insira a tarefa que deseja adicionar");
            return;
        }
        const randomId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const taskObject: taskObjectScheme = {
            taskId: Math.random().toString(36).substring(2) + Date.now().toString(36),
            taskDescription: task,
            done: false,
            onClickCheckBox() {
                this.done ? this.done = false : this.done = true;
            },
            handleRemoveTask(taskId: string) {
                const newTasksArray = tasksList.filter((item) => item.taskId !== taskId);
                setTasksList(newTasksArray);
            }
        };
        setTasksList((prevState) => [...prevState, taskObject]);

        setTask("");
    }

    //const temporaryList = ["dsaidasidsa", "doTestandoTestandoTestandoTesdsadsadtando", "TestandoTestandoTestandoTestando"];

    return (
        <View style={styles.container}>
            <View style={styles.topHeader}>
                <Logo width={120} height={40} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={[styles.input, isFocused && styles.inputFocused]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={setTask}
                    value={task}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.buttonText} onPress={() => handleAddTask(task)}>
                    <IconAdd width={16} height={16} />
                </TouchableOpacity>
            </View>

            <View style={styles.toDoListContainer}>
                <View style={styles.toDoListStatus}>
                    <View style={styles.activiesCreatedContainer}>
                        <Text style={styles.activiesCreatedText}>Criadas</Text>
                        <Text style={styles.activiesCreatedNumber}>2</Text>
                    </View>
                    <View style={styles.activiesDoneContainer}>
                        <Text style={styles.activiesDoneText}>Concluidas</Text>
                        <Text style={styles.activiesDoneNumber}>5</Text>
                    </View>
                </View>

                <View style={styles.toDoListTrue}>
                    <FlatList
                        data={tasksList}
                        keyExtractor={item => item.taskId}
                        renderItem={({ item }) => (
                            <CardComponent
                                taskId={item.taskId}
                                task={item.taskDescription}
                                done={item.done}
                                onClickCheckBox={item.onClickCheckBox}
                                onHandleRemoveTask={() => item.handleRemoveTask(item.taskId)}
                                key={item.taskId}
                            />
                        )}
                        ListEmptyComponent={EmptyListComponent}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>

        </View>
    )
}

