import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { styles } from "../CheckBox/style"

interface props {
    onClickCheckBox: () => void;
    done: boolean;
}

export function Checkbox({ done, onClickCheckBox }: props) {
    return (
        <Pressable
            style={[styles.checkboxBase, done && styles.checkboxChecked]}
            onPress={() => onClickCheckBox()}>
            {done && <Feather name="check" size={12} color="white" />}
        </Pressable>
    );
}