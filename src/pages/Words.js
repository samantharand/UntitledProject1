import React, { useState, useEffect } from 'react'

// form that takes a word and when user hits submit the word appears on screen 


export default function Words() {

	// state: array with words
	// use effect: refreshes whenever array is updated
	const [words, setWords] = useState(['boo'])
	const [wordToAdd, setWordToAdd] = useState('')

	useEffect(() => {
		console.log('useEffect called');
	}, [words])


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

	const wordsList = words.map(word => {
		return (
			<p key={word}> {word} </p>
		)
	})

	const printWords = () => {
		console.log(words);
	}

	return (
		<>
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
			<button onClick={printWords}> print words </button>
			<div className="WordContainer">
				{wordsList}
			</div>
		</>
	)
}