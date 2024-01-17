import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { styles } from "../CheckBox/style"

interface props {
    onClickCheckBox: (item: boolean) => void;
    checked: boolean;
}

export function Checkbox({ checked, onClickCheckBox }: props) {
    //const [checked, setChecked] = useState(false);
    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => onClickCheckBox(!checked)}>
            {checked && <Feather name="check" size={12} color="white" />}
        </Pressable>
    );
}