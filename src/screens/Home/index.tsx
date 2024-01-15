import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from "./style";
import Logo from "../../assets/todoLogo.svg";
import IconAdd from "../../assets/addIcon.svg";

export function Home(){


    return (
        <View style={styles.container}>
            <View style={styles.topHeader}>
                <Logo width={120} height={40} />
            </View>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.buttonText}>
                    <IconAdd width={16} height={16} />
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

