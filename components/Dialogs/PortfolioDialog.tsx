import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  })


interface PortfolioDialogProps {
        open : boolean;
        setPortfolioDialogOpen: Dispatch<SetStateAction<boolean>>
        link?: string;
        image: string;
        description: string;
        
    }

const PortfolioDialog = ({open, setPortfolioDialogOpen, link, image, description}: PortfolioDialogProps) => {

  const ExtraLink = "ExtraLink"

    return(
        <Dialog className="flex flex-col place-items-center" TransitionComponent={Transition} open={open} onClose={(event, reason) => {if (reason == 'backdropClick') {setPortfolioDialogOpen(false)}}}>
            
            <DialogContent className="flex flex-col place-items-center gap-5">
                <img src={image} alt="Portfolio Item" />
                <DialogContentText style={{fontSize: 18, textAlign: "center"}}>{description}</DialogContentText>
                {link ? <a className="hover:underline" style={{fontSize: 18, fontWeight: 600, color: "#2D8F1D", cursor: "pointer" }} onClick={() => window.open(link)}>Extra Link</a> : null}
            </DialogContent>
        </Dialog>    )
}

export {PortfolioDialog}