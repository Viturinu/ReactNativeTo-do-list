import { View, Text } from "react-native";
import Clipboard from "../../assets/Clipboard.svg"
import {styles} from "../../components/EmptyListComponent/style"

export function EmptyListComponent(){
    return (
        <View style={styles.toDoListEmptyItems}>
            <Clipboard width={56} height={56}/> 
            <Text style={styles.toDoListEmptyItemsText}>
                <Text style={styles.toDoListEmptyItemsTextBold}>Você ainda não tem tarefas cadastradas</Text>{"\n"} Crie tarefas e organize seus itens a fazer
            </Text>                    
        </View>
    )
}