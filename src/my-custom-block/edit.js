import {TextControl} from '@wordpress/components';
import  {useBlockProps} from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}) {
	const blockProps = useBlockProps();
	const {message} = attributes;
	
	function onChangeMessage(newMessage) {
		setAttributes({message: newMessage});
	}	
	return (
		<div { ...blockProps }>
			<TextControl
				label="Message"
				value={message}
				onChange={onChangeMessage}
			/>
		</div>
	);
}	
