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
	const [mode, setMode] = useState('input')

	useEffect(() => {
		console.log('useEffect called');
	}, [])

	const handleChange = (e) => {
		setWordToAdd(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(mode === 'input') {
			const newWords = [...words, wordToAdd]
			setWords(newWords)
		} else if (mode === 'textarea') {
			const indivWords = wordToAdd.split(' ')
			console.log('indivWords', indivWords);

			for(let i = 0; i < indivWords.length; i++) {
				console.log(i, indivWords[i]);
				// const newWords = [...words, indivWords[i]]
				// setWords(newWords)
				words.push(indivWords[i])
			}
		}
		// words.push(wordToAdd)
		// console.log("new words", newWords);
		// console.log(words);
		setWordToAdd('')
	}

	const switchMode = () => {
		if(mode === 'input') {
			setMode('textarea')
		} else {
			setMode('input')
		}
	}

	const resetWords = () => {
		setWords([])
	}

	const dragStart = (e) => {
		console.log(e);
		// console.log(e.target.style, 'target style');
		console.log(e.clientX, 'clientx');
		console.log(e.clientY, 'clientY');
		e.target.style.border = '1px solid grey'
	}

	const drag = (e) => {
		e.target.style.display = 'none'
	}

	const onWordDrop = (e) => {
		console.log('onWordDrop');
		// console.log(e.clientX, 'clientx');
		// console.log(e.clientY, 'clientY');
		// console.log(e.pageX, 'pageX');
		// console.log(e.pageY, 'pageY');
		// console.log(e.screenX, 'screenX');
		// console.log(e.screenY, 'screenY');

		// console.log(e);
		// console.log(e.currentTarget.style.width);


		e.target.style.left = (e.pageX - 50) + 'px' 
		e.target.style.top =  (e.pageY - 15) + 'px'
		e.target.style.display = 'block'
	}

	const wordsList = words.map((word, i) => {
		return (
			<p 
				className='SingleWord' 
				draggable='true' 
				key={i}
				onDragStart={dragStart}
				onDrag={drag}
				> {word} </p>
		)
	})


	return (
		<div 
			className='WordDiv'
			onDragEnd={onWordDrop}
			onClick={(e) => console.log(e, e.clientX)}
		>
			<p>WORDS</p>
			<button onClick={switchMode}> switch mode </button>
			<form onSubmit={handleSubmit}>
				{
					mode === 'input'
					&&
					<input 
						onChange={handleChange}
						value={wordToAdd}
						placeholder="type word here"
						type='text'
					/>
				}
				{
					mode === 'textarea'
					&&
					<textarea 
						onChange={handleChange}
						value={wordToAdd}
						placeholder="type paragraph here"
					/>
				}
				<button type='submit'> add word </button>
			</form>
			<div className="WordContainer">
				{wordsList}
			</div>
			<button onClick={resetWords}> reset words </button>
		</div>
	)
}