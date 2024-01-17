import { Text, StyleSheet, View } from 'react-native';
import { styles } from "./style"
import { Checkbox } from "../CheckBox"
import Trash from "../../assets/Trash.svg"
import React from "react";

interface taskProps {
    task: string;
}

export function CardComponent({ task }: taskProps) {

    return (
        <View style={styles.cardContainer}>
            <Checkbox />
            <View style={styles.cartContainerView}>
                <Text style={styles.cartContainerText}> {task} </Text>
            </View>

            <View style={styles.LogoView}>
                <Trash width={12} height={14} />
            </View>
        </View>
    )
}