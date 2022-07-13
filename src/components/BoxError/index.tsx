import { useEffect, useState } from 'react'
import styles from './BoxError.module.css'

interface BoxErrorPros {
	mensageError: string
	visible: boolean
	height?: string
	width?: string
}

export function BoxError(props: BoxErrorPros) {
	const [mensageFilterVisible, setMensageFilterVisible] = useState(false)
	const [mensageFilter, setMengageFilter] = useState('')
	const { mensageError } = props
	const mensageRegisterError = mensageError.substring(320)

	useEffect(() => {
		if (mensageRegisterError === 'github`)' || mensageRegisterError === 'the fields: (`github`)') {
			setMensageFilterVisible(true)
			setMengageFilter('This github is already used by a user')
		} else if (mensageRegisterError === 'nickname`)' || mensageRegisterError === 'the fields: (`nickname`)') {
			setMensageFilterVisible(true)
			setMengageFilter('This username is already used by a user')
		} else {
			setMensageFilterVisible(true)
			setMengageFilter('Unexpected error')
		}

		return () => setMensageFilterVisible(false)
	}, [mensageError])

	return (
		<>
			{
				props.visible && (
					<div
						className={styles.errorBox}
						style={{ height: props.height, width: props.width }}
					>
						<p>{mensageFilterVisible ? mensageFilter : props.mensageError}</p>
					</div>
				)
			}
		</>
	)
}
