import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { CardComponent } from "../../components/CardComponent";
import { EmptyListComponent } from "../../components/EmptyListComponent";
import Logo from "../../assets/todoLogo.svg";
import IconAdd from "../../assets/addIcon.svg"
import { addTask, getTaksList, removeTask, taskObject } from "../../storage/task";

export function Home() {

    const [tasksList, setTasksList] = useState<taskObject[]>([]);

    const [task, setTask] = useState<string>("");
    const [doneCount, setDoneCount] = useState(0);

    const [isFocused, setIsFocused] = useState(false);

    async function loadingTasks() {
        try {
            const lista = await getTaksList();
            setTasksList(lista);
        } catch (error) {
            console.log(error)
        }
    }

    function handleAddTask(task: string) {
        if (task === "") {
            Alert.alert("Inserção de dados", "Por favor, insira a tarefa que deseja adicionar");
            return;
        }
        try {
            let lista: taskObject[] = []; //ela que será escrita, por conta da lentidão do estado. Semelhante à função abaixo de remove
            lista = [...tasksList, new taskObject(task)];
            setTasksList(lista); //setando o estado com o novo array
            addTask(lista); //tem que ser com a lista criada acima, pois estado demora de atualizar, e acaba mandando pro AsyncStorage um estado desatualizado por conta do assincronismo.
            setTask("");
        } catch (error) {
            console.log(error)
        }
    }

    function handleRemoveTask(taskId: string) {
        try {
            (tasksList.find(item => item.taskId === taskId))?.done ? setDoneCount(doneCount - 1) : null;
            const newTasksArray = tasksList.filter((item) => item.taskId !== taskId);
            setTasksList(newTasksArray);
            removeTask(newTasksArray); //newTaskArray por conta do assincronismo do estado, que manda um TasksList(estado) de forma desatualizada 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadingTasks()
    }, [])

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
                                    addTask(tasksList); //tem que ser com a lista criada acima, pois estado demora de atualizar, e acaba mandando pro AsyncStorage um estado desatualizado por conta do assincronismo.
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

