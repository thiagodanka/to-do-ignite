import styles from './Tasks.module.css'
import add from '../../assets/img/add.svg'
import Clipboard from '../../assets/img/Clipboard.svg'
import { useState } from 'react'
import { Task } from './Task'
export function Tasks() {

    const [tasks, setTasks] = useState(1)

    return (
        <div className={styles.container}>
            <div className={styles.newTask}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                />
                <div className={styles.button}>
                    <span>Criar</span>
                    <img src={add} alt="" />
                </div>
            </div>

            <div className={styles.containerTasks}>
                <div className={styles.header}>
                    <div>
                        <span className={styles.criadas}>Tarefas criadas</span>
                        <span className={styles.number}>0</span>
                    </div>
                    <div>
                        <span className={styles.concluidas}>Concluídas</span>
                        <span className={styles.number}>0</span>
                    </div>
                </div>
                {tasks <= 0 ?
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
                        <Task/>
                    </div>
                }

            </div>
        </div>
    )
}