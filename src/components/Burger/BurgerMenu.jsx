import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from 'react-router-dom'

export default function MenuItem() {

	const navigate = useNavigate()

	return (
		<Box
			sx={{
				
				position: 'relative',
				left: '1px',
				top: '70px',
				borderRadius: '3px',
				width: '200px',
			}}
		>
			<List component='nav' aria-label='main'>
				<ListItemButton onClick={() => navigate('/')}>
					<ListItemText primary='На главную' />
				</ListItemButton>
				<ListItemButton onClick={() => navigate('/blog')}>
					<ListItemText primary='Блок' />
				</ListItemButton>
				<ListItemButton onClick={() => navigate('/contact')}>
					<ListItemText primary='Контакты' />
				</ListItemButton>
			</List>
		</Box>
	)
}
