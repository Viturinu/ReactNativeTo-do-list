import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { CardComponent } from "../../components/CardComponent";
import { EmptyListComponent } from "../../components/EmptyListComponent";
import Logo from "../../assets/todoLogo.svg";
import IconAdd from "../../assets/addIcon.svg"

interface taskObjectProps {
    taskId: string;
    taskDescription: string;
    done: boolean;
    onClickCheckBox: () => void;
}

class taskObject implements taskObjectProps {
    taskId: string;
    taskDescription: string;
    done: boolean;
    constructor(taskDescription: string) {
        this.taskId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        this.taskDescription = taskDescription;
        this.done = false;
    }

    onClickCheckBox(): void {
        this.done === true ? this.done = false : this.done = true;
    }
}

export function Home() {

    const [tasksList, setTasksList] = useState<taskObject[]>([]);

    const [task, setTask] = useState<string>("");
    const [doneCount, setDoneCount] = useState(0);

    const [isFocused, setIsFocused] = useState(false);

    function handleAddTask(task: string) {
        if (task === "") {
            Alert.alert("Inserção de dados", "Por favor, insira a tarefa que deseja adicionar");
            return;
        }

        setTasksList((prevState) => [...prevState, new taskObject(task)]);
        setTask("");
    }

    function handleRemoveTask(taskId: string) {
        (tasksList.find(item => item.taskId === taskId))?.done ? setDoneCount(doneCount - 1) : null;
        const newTasksArray = tasksList.filter((item) => item.taskId !== taskId);
        setTasksList(newTasksArray);
    }

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
                        <Text style={styles.activiesCreatedNumber}>{tasksList.length}</Text>
                    </View>
                    <View style={styles.activiesDoneContainer}>
                        <Text style={styles.activiesDoneText}>Concluidas</Text>
                        <Text style={styles.activiesDoneNumber}>{doneCount}</Text>
                    </View>
                </View>

                <View style={styles.toDoListTrue}>
                    <FlatList
                        data={tasksList}
                        keyExtractor={item => item.taskId}
                        renderItem={({ item }) => (
                            <CardComponent
                                taskId={item.taskId}
                                taskDescription={item.taskDescription}
                                done={item.done}
                                onClickCheckBox={() => {
                                    item.onClickCheckBox();
                                    setDoneCount((tasksList.filter((item) => item.done !== false)).length);
                                    console.log(doneCount);
                                }}
                                onHandleRemoveTask={() => handleRemoveTask(item.taskId)}
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

