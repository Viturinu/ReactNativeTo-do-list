import AsyncStorage from "@react-native-async-storage/async-storage";

export interface taskObjectProps {
    taskId: string;
    taskDescription: string;
    done: boolean;
}

export class taskObject implements taskObjectProps {
    taskId: string;
    taskDescription: string;
    done: boolean;
    constructor(taskDescription: string, taskId?: string, done?: boolean) {
        this.taskDescription = taskDescription;
        taskId ? this.taskId = taskId : this.taskId = Math.random().toString(36).substring(2) + Date.now().toString(36)
        done ? this.done = done : this.done = false;
    }

    onClickCheckBox(): void {
        this.done === true ? this.done = false : this.done = true;
    }
}

export async function addTask(lista: taskObject[]) {
    await AsyncStorage.setItem("lista", JSON.stringify(lista));
}

export async function removeTask(lista: taskObject[]) {
    await AsyncStorage.setItem("lista", JSON.stringify(lista));
}
export async function getTaksList() {
    let MainList: taskObject[] = [];
    const listString = await AsyncStorage.getItem("lista") ?? "[]";
    const listaJSON: taskObjectProps[] = JSON.parse(listString); //preparar a lista para nossa classe
    if (listaJSON.length !== 0) {
        listaJSON.forEach((element) => {
            MainList = [...MainList, new taskObject(element.taskDescription, element.taskId, element.done)];
        })
    } else {
        MainList = [];
    }
    return MainList;

}