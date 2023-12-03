import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    PropsWithChildren,
} from 'react';

export const Button = ({
    children,
    ...props
}: PropsWithChildren<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>) => {
    return (
        <button type="button" {...props}>
            {children}
        </button>
    );
};
