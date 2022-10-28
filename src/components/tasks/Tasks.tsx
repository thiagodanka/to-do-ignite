import styles from './Tasks.module.css'
import add from '../../assets/img/add.svg'
import Clipboard from '../../assets/img/Clipboard.svg'
import { useState } from 'react'
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Task } from './Task'




interface TaskProps {
    id: number
    isChecked: boolean,
    description: string,
}

export function Tasks() {

    function handleToggleTaskCompletion(idTask: number) {
        const toggleCompletion = tasks.map(task => task.id == idTask ? {
            ...task,
            isChecked: !task.isChecked
        } : task)
        toast.info('Alterado com sucesso');
        setTasks(toggleCompletion)
    }
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const [description, setDescription] = useState('')


    function handleNewTask(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        if ((!description) || (!description.match(/[A-z0-9]/))) {
            setDescription('')
            toast.error('Digite caracteres válidos');
            return
        }

        const newTask: TaskProps = {
            id: Math.random(),
            description: description,
            isChecked: false,
        }
        setTasks(oldState => [...oldState, newTask])
        toast.success('Tarefa criada ✔');
        setDescription('')
    }

    function handleRemove(id: number) {
        const searchTask = tasks.filter(task => task.id != id);
        toast.warning('Tarefa deletada ✔');
        setTasks(searchTask)
    }
    const activeQuantity = tasks.filter(task => task.isChecked === true);
    return (
        <div className={styles.container}>
            <form className={styles.newTask} >
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <button type='submit' onClick={handleNewTask} className={styles.button}>
                    Criar
                    <img src={add} alt="" />
                </button>
            </form>

            <div className={styles.containerTasks}>
                <div className={styles.header}>
                    <div>
                        <span className={styles.criadas}>Tarefas criadas</span>
                        <span className={styles.number}>{tasks?.length}</span>
                    </div>
                    <div>
                        <span className={styles.concluidas}>Concluídas</span>
                        <span className={styles.number}>{activeQuantity?.length} de {tasks?.length}</span>
                    </div>
                </div>
                {tasks.length <= 0 ?
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
                    <>
                        {tasks.map(task => {
                            let newDescription = task.description.substring(0, 250)
                            if (newDescription.length >= 250) {
                                newDescription = newDescription + '...'
                            }
                            return (
                                <div key={task.id} className={styles.tasksActive}>
                                    <Task
                                        setChecked={() => handleToggleTaskCompletion(task.id)}
                                        Id={task.id}
                                        description={newDescription}
                                        isChecked={task.isChecked}
                                        onClick={() => handleRemove(task.id)}
                                    />
                                </div>
                            )
                        }
                        )}

                    </>
                }


            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div >
    )
}

