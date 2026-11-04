import IconButton from "@/components/IconButton/IconButton";
import { NavigateBefore } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

interface ElevatorFamilyProps{
    onBack: () => void;
}
const ElevatorFamily = (props: ElevatorFamilyProps) => {
    const { onBack } = props;
    return(
        <Box p={3}>
            <Stack direction='row'>
                <IconButton
                    icon={<NavigateBefore/>}
                    handleFunt={onBack}
                />
                <Typography variant="h4">THANG MÁY GIA ĐÌNH</Typography>
            </Stack>
        </Box>
    )
}

export default ElevatorFamily;