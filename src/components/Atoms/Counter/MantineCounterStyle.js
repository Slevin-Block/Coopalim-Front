import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    global: {
        width : '100%',
        height : '30px',
    },

    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0px 4px`,
        borderRadius: `4px`,
        border: `1px solid #ced4da`,
        backgroundColor: `var(--background)`,
        

        '&:focus-within': {
            borderColor: theme.colors[theme.primaryColor][6],
        },
    },

    control: {
        backgroundColor: `var(--background)`,
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
        flex: 1,
        borderColor : 'transparent',

        '&:focus' : {
            borderColor : 'transparent',
        }
    },
}));