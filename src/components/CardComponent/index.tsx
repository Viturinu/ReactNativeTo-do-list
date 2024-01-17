import { Text, StyleSheet, View } from 'react-native';
import { styles } from "./style"
import { Checkbox } from "../CheckBox"
import Trash from "../../assets/Trash.svg"
import React from "react";

interface taskProps {
    taskId:number;
    task:string;
    done:boolean
}

export function CardComponent({ task }: taskProps) {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.checkBox}>
                    <Checkbox />
            </View>
            <View style={styles.cardContainerViewText}>
                <Text style={styles.cardContainerText}> {task} </Text>
            </View>
            <View style={styles.LogoView}>
                    <Trash width={12} height={14} />
            </View>
        </View>
    )
}