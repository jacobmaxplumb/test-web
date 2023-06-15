import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

// Write your Character component here
const style = {
	margin: "10px",
};

export const Character = (props) => {
	console.log(props);
	return (
		<Card style={style} sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{props.character.name}
				</Typography>
			</CardContent>
			<CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
				<Button variant="outlined" size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};
