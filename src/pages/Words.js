import React, { useState, useEffect } from 'react'
import './styles/Words.css'

// form that takes a word and when user hits submit the word appears on screen 


export default function Words() {

	// state: array with words
	// use effect: refreshes whenever array is updated
	// drag and drop words
	// maybe make it so u can enter a block of text and it will split them into a bunch of words at the spaces
		// toggle between words or paragraph input

	const [words, setWords] = useState(['testing'])
	const [wordToAdd, setWordToAdd] = useState('')

	useEffect(() => {
		console.log('useEffect called');
	}, [])

	const handleChange = (e) => {
		console.log(e.target.value);
		setWordToAdd(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newWords = [...words, wordToAdd]
		words.push(wordToAdd)
		// console.log("new words", newWords);
		setWords(newWords)
		console.log(words);
		setWordToAdd('')
	}

	const resetWords = () => {
		setWords([])
	}

	const dragStart = (e) => {
		console.log(e);
		console.log(e.target.style, 'target style');
		console.log(e.clientX, 'clientx');
		console.log(e.clientY, 'clientY');
		e.target.style.backgroundColor = 'yellow'
	}

	const onWordDrop = (e) => {
		console.log('onWordDrop');
		console.log(e.clientX, 'clientx');
		console.log(e.clientY, 'clientY');
		console.log(e);

		e.target.style.backgroundColor = 'red'
		e.target.style.left = e.clientX + 'px'
		e.target.style.top = e.clientY + 'px'
	}

	const wordsList = words.map((word, i) => {
		return (
			<p 
				className='SingleWord' 
				draggable='true' 
				key={i}
				onDragStart={dragStart}
				> {word} </p>
		)
	})


	return (
		<div 
			className='WordDiv'
			onDragEnd={onWordDrop}>
			<p>WORDS</p>
			<form onSubmit={handleSubmit}>
				<input 
					onChange={handleChange}
					value={wordToAdd}
					placeholder="type word here"
					type='text'
				/>
				<button type='submit'> add word </button>
			</form>
			<div className="WordContainer">
				{wordsList}
			</div>
			<button onClick={resetWords}> reset words </button>
		</div>
	)
}