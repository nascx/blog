"use client"

import CommentCard from '@/components/CommentCard'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const commentsData = [
  {
      date: '02 de ago, 2024',
      title: 'O que é linguagem de programação? Conheça as principais',
      content: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.'
  },
  {
      date: '02 de ago, 2024',
      title: 'GitHub agora permite fazer login sem precisar de senha',
      content: 'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.'
  }
]

const Blog = () => {
  return (
    <div className="flex flex-col bg-[#121214] w-full h-screen justify-start items-center">
      <SearchBar />
      <div className="flex flex-col justify-center items-center mt-4 h-full">
        {
          commentsData.map((comment, index) => (
            <CommentCard date={comment.date} title={comment.title} content={comment.content} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Blog