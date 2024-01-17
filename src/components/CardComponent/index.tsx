import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from "./style"
import { Checkbox } from "../CheckBox"
import Trash from "../../assets/Trash.svg"
import React from "react";

interface taskProps {
    taskId: string;
    task: string;
    done: boolean;
    onClickCheckBox: () => void;
    onHandleRemoveTask: (taskId: string) => void;
}

export function CardComponent({ task, taskId, done, onClickCheckBox, onHandleRemoveTask }: taskProps) {

    return (
        <View style={styles.cardContainer}>
            <View style={styles.checkBox}>
                <Checkbox onClickCheckBox={onClickCheckBox} checked={done} />
            </View>
            <View style={styles.cardContainerViewText}>
                <Text style={[styles.cardContainerText, done && styles.cardContainerTextTrue]}> {task} </Text>
            </View>
            <View style={styles.LogoView}>
                <TouchableOpacity onPress={() => onHandleRemoveTask(taskId)}>
                    <Trash width={12} height={14} />
                </TouchableOpacity>
            </View>
        </View>
    )
}