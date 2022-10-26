import styles from './Tasks.module.css'
import { GrAddCircle } from 'react-icons/gr'
import add from '../../assets/img/add.svg'
import Clipboard from '../../assets/img/Clipboard.svg'
import { useState } from 'react'
import { Task, TaskProps } from './Task'

export function Tasks() {

    const [tasks, setTasks] = useState<TaskProps[]>([])

    function newTask(description: string) {
        const newsTasks: TaskProps = {
            id: Math.random(),
            isChecked: false,
            description: description
        }
        setTasks(oldState => [
            ...oldState, newsTasks
        ])
    }
    return (
        <div className={styles.container}>
            <form className={styles.newTask}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                />

                <button className={styles.button}>
                    Criar
                    <img src={add} alt="" />
                </button>
            </form>

            <div className={styles.containerTasks}>
                <div className={styles.header}>
                    <div>
                        <span className={styles.criadas}>Tarefas criadas</span>
                        <span className={styles.number}>0</span>
                    </div>
                    <div>
                        <span className={styles.concluidas}>Concluídas</span>
                        <span className={styles.number}>{tasks?.length}</span>
                    </div>
                </div>
                {tasks?.length <= 0 ?
                    <div className={styles.tasksNull}>
                        <div>
                            <img src={Clipboard} alt="" />
                        </div>
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p className={styles.noWeight}>Crie tarefas e organize seus itens a fazer</p>
                        </div>

                    </div>
                    :
                    <div className={styles.tasksActive}>
                        <Task description='' id={1} isChecked={true} />
                    </div>
                }

            </div>
        </div>
    )
}