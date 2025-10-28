import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import ScrambleHover from "../../fancy/text/scramble-hover";

const buttonVariants = cva(
  "font-mono uppercase inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-sm text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default: "bg-yellow-300/20 hover:bg-primary-foreground/10 text-primary-foreground border border-primary-foreground backdrop-blur-xl before:absolute before:inset-0 before:bg-black/20 before:rounded-sm before:-z-10",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 text-sm px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const extractText = (node: any): string => {
      if (typeof node === 'string') return node;
      if (typeof node === 'number') return String(node);
      if (React.isValidElement(node)) {
        return React.Children.toArray(node.props.children).map(extractText).join('');
      }
      if (Array.isArray(node)) {
        return node.map(extractText).join('');
      }
      return '';
    };

    const mapChildren = (node: any): any => {
      if (typeof node === 'string') {
        return <ScrambleHover text={node} useOriginalCharsOnly={false} characters="FORUM2025" />;
      }
      if (typeof node === 'number') {
        return <ScrambleHover text={String(node)} useOriginalCharsOnly={false} characters="FORUM2025" />;
      }
      if (React.isValidElement(node)) {
        return React.cloneElement(node, {}, React.Children.toArray(node.props.children).map(mapChildren));
      }
      if (Array.isArray(node)) {
        return node.map((child, i) => <React.Fragment key={i}>{mapChildren(child)}</React.Fragment>);
      }
      return node;
    };

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      {mapChildren(children)}
    </Comp>;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
