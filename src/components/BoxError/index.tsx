import styles from './BoxError.module.css'

interface BoxErrorPros {
	mensageError: string
	visible: boolean
	height?: string
	width?: string
}

export function BoxError(props: BoxErrorPros) {
	return (
		<>
			{
				props.visible && (
					<div
					className={styles.errorBox}
					style={{height: props.height, width: props.width}}
					>
						<p>{props.mensageError}</p>
					</div>
				)
			}
		</>
	)
}
