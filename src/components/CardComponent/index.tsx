import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./style"
import { Checkbox } from "../CheckBox"
import Trash from "../../assets/Trash.svg"
import React from "react";

export interface taskObjectProps {
    taskId: string;
    taskDescription: string;
    done: boolean;
    onClickCheckBox: () => void;
    onHandleRemoveTask: (taskId: string) => void;
}

export function CardComponent({ taskDescription, taskId, done, onClickCheckBox, onHandleRemoveTask }: taskObjectProps) {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.checkBox}>
                <Checkbox onClickCheckBox={() => onClickCheckBox()} done={done} />
            </View>
            <View style={styles.cardContainerViewText}>
                <Text style={[styles.cardContainerText, done && styles.cardContainerTextTrue]}> {taskDescription} </Text>
            </View>
            <View style={styles.LogoView}>
                <TouchableOpacity onPress={() => onHandleRemoveTask(taskId)}>
                    <Trash width={12} height={14} />
                </TouchableOpacity>
            </View>
        </View>
    )
}