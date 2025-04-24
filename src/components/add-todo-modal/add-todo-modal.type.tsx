export interface AddTodoModalProps {
	title: string;
	description: string;
	onTitleChange: (value: string) => void;
	onDescriptionChange: (value: string) => void;
	onSave: () => void;
	onCancel: () => void;
	isSaveDisabled: boolean;
}