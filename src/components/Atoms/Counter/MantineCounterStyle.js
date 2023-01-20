import { createStyles } from "@mantine/core";
import { getInCss } from "../../../global/functions/getInCss";

export const useStyles = createStyles((theme) => ({

    global: {
        width : '100%',
    },

    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `6px 10px`,
        borderRadius: `4px`,
        border: `1px solid #ced4da`,
        backgroundColor: getInCss('--background'),
        

        '&:focus-within': {
            borderColor: theme.colors[theme.primaryColor][6],
        },
    },

    control: {
        backgroundColor: getInCss('--background'),
        border: `1px solid #ced4da`,

        '&:disabled': {
            borderColor: `#ced4da`,
            opacity: 0.8,
            backgroundColor: 'transparent',
        },
    },
    input: {
        textAlign: 'center',
        paddingRight: `12px`,
        paddingLeft: `12px`,
        height: 28,
        flex: 1,
        borderColor : 'transparent',

        '&:focus' : {
            borderColor : 'transparent',
        }
    },
}));