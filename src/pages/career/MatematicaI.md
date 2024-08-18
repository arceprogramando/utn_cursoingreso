---
layout: ../../layouts/MarkdownPostLayout.astro
title: Matematica
author: Felipe Arce
description: 'Matematica I'

image:
  url: '/ApunteMatematicaI.avif'
  alt: 'Apunte de Matematica I'
pubDate: 2024-04-28
tags: ['apuntes', 'matematica','Primer Cuatrimestre']
totalTimeClass: 56
totalExam: 8
totalTime: 64
professor: Giselle Bottazzi
---

## Matematica I

### Clase I - 16 de abr de 2024

#### Bibliografía de Consulta

- Algebra I, Armando Rojo, Ed. El Ateneo
- Algebra II, Armando Rojo, Ed. El Ateneo
- Matemática Discreta, Grassmann. Ed. Prentice-Hall
- Matemática Para la computación. José Murillo. Ed. Alfaomega

## Unidad 1

<div class="uppercase underline">
  Conjuntos - Operaciones, leyes y propiedades - Problemas de Conteo- Traducción
  a Notación Conjuntista.
</div>

### Conceptos Matemáticos: Conjuntos y Operaciones

<p>En matemáticas, los conjuntos son colecciones bien definidas de objetos,
  llamados elementos, que pueden ser números, letras, o cualquier otro tipo de
  objeto.
</p>

#### Cardinal de un Conjunto

<p>El cardinal de un conjunto es el número de elementos que contiene. Se lo
  identifica con un #
</p>

<div class="flex flex-col md:flex-row justify-around items-center">
  <img src="/DiagramaDeVenn1.webp" alt="Primer diagrama de venn">

  <div class="text-xs">
    <ul class=" list-none">
      <li>A = PERSONAS QUE LES GUSTA EL FUTBOL </li>
      <li>B = PERSONAS QUE LES GUSTA EL NATACIÓN </li>
      <ul><li>Conjunto \( A = \{ \text{Ana}, \text{Juan},
          \text{Jose},\text{Maria} \} \)</li>

  <li> Conjunto \( B = \{ \text{Maria}, \text{Laura},
          \text{Marcos} \} \)</li>
        <li> Conjunto \( U = \{ \text{Ana}, \text{Juan},
          \text{Jose}, \text{Maria}, \text{Laura}, \text{Marcos}
          \} \)</li>
        <li>Cardinal #\( A \) \( \text{} = 4 \)</li>
        <li>Cardinal #\( B \) \( \text{} = 3 \)</li>
      </ul>
    </div>
  </div>

  <p>A interseccion B</p>
  <p class=" text-red-600">\( A \cap B = \{ \text{Maria}
    \} \)</p>

  <p>A Union B</p>
  <p class="text-green-600">\( A \cup B = \{
    \text{Ana}, \text{Juan}, \text{Jose},
    \text{Maria}, \text{Marcos}, \text{Laura} \}
    \)</p>

  <p>A Intersección de B Complemento </p>
  <p class="text-orange-600">\( A - B = A \cap
    \overline{B} = \{ \text{Ana}, \text{Juan},
    \text{Jose} \} \)</p>

  <p class="text-green-600">\( \overline{B} \) = \(
    B^c \) <span class="text-black"> Son decir lo
      mismo</span></p>

  ### Conjunto

<p>Un conjunto es una colección de elementos.
    Normalmente están caracterizados por compartir una
    propiedad</p>

<p class=" text-orange-700">Definición Explícita o
    por Extensión: <span class="text-black"> Citando
      todos los elementos entre llaves</span>
</p>

<p class=" border border-red-700 inline p-2">
        Conjunto \( A = \{ \text{Ana}, \text{Juan},
        \text{Jose}, \text{Maria} \} \)</p>
<p class="text-green-600">Definición Implícita o
        por Comprension:<span class="text-black">Dando
          una o varias Características que determinan
          si el elemento pertenece o no Al
          conjunto</span>
</p>

<div class="flex justify-center border-b-2 pb-4 ">
  <div class="border border-green-600 p-2 ">
      <p>\( A = \{ \text{Números naturales menores <br> 
            o iguales a 5} } \)</p>
      <p>\( A = \{ x \in \mathbb{N} \mid x \leq 5
            \} \)</p>
      <img src="/expresion.webp"
            alt="Expresion Matematica Universal 1"
            class="p-0 m-0">
      <p>\( \in \) representa "pertenece a".</p>

  </div>
</div>

### Igualdad De Conjuntos

Dos Conjuntos A Y B son iguales ucando poseen los mismos elementos

<p>\( x \in A \quad \Leftrightarrow \quad x \in B \)</p>
<p class=" border-2 inline border-orange-600 p-2 uppercase">Conjuntos Especiales</p>

<p>El <span class="text-orange-600">conjunto
          vacío \( \emptyset \)</span> es aquel
        que carece de elementos\( \emptyset = \{\}
        \), o bien en ∀x, x ∉ a \( \emptyset
        \)</p>

<p>El <span class="text-orange-600">conjunto
          unitario</span> es cuando tiene un único
        elemento . Por ejemplo :{1}, {a},
        {luis}</p>

<p><span class="text-green-600">Definición
          de Inclusión:</span> Subconjunto. Dados
        dos conjuntos A Y B , Decimos que A esta
        contenido o incluido en B O que A Es un
        Subcojunto de B, Y lo Denotamos COMO \( A
        \subset B \)</p>

<img src="/DiagramaDeVenn2.webp" alt="Primer diagrama de venn">

<div
        class="flex flex-col md:flex-row justify-around items-center">
        <ul class="list-none p-0 m-0">
          <li>
            <p>\( A = \{ x \in \mathbb{N} \mid x < 7 \} \)</p>
            <img src="/expresion2.webp"
              alt="Expresion Matematica Universal 2"
              class="p-0 m-0">
          </li>

  <li>\( U = \{0, 1, 2, 3, 4, 5, 6\}\)</li>
  <li>\( A = \{4, 2, 3\} \)</li>

  <li>
    <p>\( B = \{ x \mid x \in \mathbb{N}
              \land 2 \leq x < 6 \} \)</p>
      <img src="/expresion3.avif" alt="Expresion Matematica Universal 2" class="p-0 m-0">
    </li>
    <li>\( B = \{2, 3, 4, 5\} \)</li>
  </ul>
        <div class="flex flex-col">
          <img src="/DiagramaDeVenn3.webp"
            alt="Expresion Matematica Universal 2"
            class="m-0 p-0">
          <div class="flex justify-center gap-8 ">
            <p>\( A ⊂ B \) ✔ </p>
            <p>\( A ⊆ B \) ❌</p>
          </div>
        </div>
      </div>
    </p>
  </div>

<div class="border-2 border-violet-600 p-2">
  <p class="text-orange-600">Propiedad Reflexiva: Todo conjunto esta incluido en si Mismo. 
  <p class="text-center">\( A ⊂  A \) </p>
  <p class="text-orange-600">Propiedad Transitiva: <span class="text-black"> Si \( A ⊂ B ⊂ \uparrow C => A ⊂ C \)</span></p> 
</div>

#### Inclusión e Igualdad entre conjuntos

<p>\( A = B \) = \( A \subset B \) \( \land \) \( B \subset A \)</p>

<div class="flex items-center justify-center  border-b-2 pb-4">
      <img src="/explicacionigualdadconjuntos.avif" alt="Expresion Matematica Universal 2" class="p-0 m-0">
</div>

<h4 class="text-center">Complemento entre Conjuntos</h4>

<h5 class="text-orange-600 underline uppercase">Complemento</h5>

LLamamos Complemento de A a los elementos del universo que no pertenecen a A


<div class="flex flex-col md:flex-row items-center justify-around">
        <div>
            <p>Se denota con <span class="text-orange-600">\( A^c \)</span> o <span class="text-orange-600">\( \overline{A} \)</span></p>
            <p><span class="text-orange-600">\( A^c = \{ x \in \mathbb{N} \mid x \notin A \} \)</span></p>
        </div>
        <img src="/DiagramaDeVenn4.webp" alt="Diagrama de Venn 4" class="m-0 p-0">
    </div>