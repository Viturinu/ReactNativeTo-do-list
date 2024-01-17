import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style";
import Logo from "../../assets/todoLogo.svg";
import IconAdd from "../../assets/addIcon.svg";
import { useState } from "react";
import { CardComponent } from "../../components/CardComponent";
import { EmptyListComponent } from "../../components/EmptyListComponent";

export function Home() {

    const temporaryList = [" TestadestandoTestando", " TestandoTesdsadsadtandoTestandoTestando", " TestandoTestandoTestandoTestando"];

    const [tasksList, setTaskList] = useState<string[]>([]);
    const [task, setTask] = useState<string>("");

    const [isFocused, setIsFocused] = useState(false);

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
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.buttonText}>
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
                        data={temporaryList}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <CardComponent
                                task={item}
                                key={item}
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

