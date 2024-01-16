import { View, Text } from "react-native";
import {styles} from "./style"
import Trash from "../../assets/Trash.svg"

interface taskProps{
    task: string;
}

export function CardComponent({task}: taskProps){

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cartContainerText}> O </Text>
            <Text style={styles.cartContainerText}> {task} </Text>
            <Trash width={12} height={14}/>  
        </View>
    )
}