export interface TodoListTileProps{
	title: string,
	description: string,
	isCompleted: boolean,
	onDelete: () => void,
	onComplete: () => void,
}
