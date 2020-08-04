import React from 'react'

import PageHeader from '../../components/PageHeader'

import './styles.css'
import TeacherItem from '../../components/TeacherItem'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem 
                    name="Josimar Junior"
                    avatar="https://avatars2.githubusercontent.com/u/49077388?s=400&u=bef8a30973cb56d445fb0eb1f71ba2a1bea73a89&v=4" 
                    discipline="Química"
                    feature="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius perferendis unde rerum quia voluptatibus deserunt quibusdam eaque enim ad asperiores maiores consequatur ipsum amet, impedit, repellat est illum illo."
                    preco={100}
                />
                <TeacherItem 
                    name="Maria Jeneff"
                    avatar="https://avatars2.githubusercontent.com/u/49077388?s=400&u=bef8a30973cb56d445fb0eb1f71ba2a1bea73a89&v=4" 
                    discipline="Biológia"
                    feature="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius perferendis unde rerum quia voluptatibus deserunt quibusdam eaque enim ad asperiores maiores consequatur ipsum amet, impedit, repellat est illum illo."
                    preco={120}
                />
                <TeacherItem 
                    name="Leandro"
                    avatar="https://avatars2.githubusercontent.com/u/49077388?s=400&u=bef8a30973cb56d445fb0eb1f71ba2a1bea73a89&v=4" 
                    discipline="Física"
                    feature="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius perferendis unde rerum quia voluptatibus deserunt quibusdam eaque enim ad asperiores maiores consequatur ipsum amet, impedit, repellat est illum illo."
                    preco={90}
                />
            </main>
        </div>
    )
}

export default TeacherList