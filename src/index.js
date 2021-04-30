
	import { render } from 'react-dom'
	import Example from './example'
	import { DndProvider } from 'react-dnd'
  import { HTML5Backend } from 'react-dnd-html5-backend';
	import { TouchBackend } from 'react-dnd-touch-backend'
  import { isDesktop } from 'react-device-detect';

	function App() {
		return (
			<div className="App">
				<DndProvider backend={isDesktop ? HTML5Backend : TouchBackend}>
					<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
