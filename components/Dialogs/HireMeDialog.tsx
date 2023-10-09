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


interface HireMeDialogProps {
        open : boolean;
        setHireMeDialogOpen: Dispatch<SetStateAction<boolean>>
    }

const HireMeDialog = ({open, setHireMeDialogOpen}: HireMeDialogProps) => {
    return(
        <Dialog TransitionComponent={Transition} open={open} onClickCapture={()=>{setHireMeDialogOpen(false)}}>
            <DialogTitle className="flex justify-between">
                <span style={{color: "#2D8F1D", fontWeight: 800, fontSize: 24}}>Hi, Thanks for wanting to Hire Me!</span>
                <button>X</button>
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{fontWeight: 900, fontSize: 16}}>
                    Right now I'm very busy with other projects, but thanks for checking out my profile. I hope we can work together in the future.
                </DialogContentText>
                <img src="/media/Mi-Loco.png" alt="Hire Me Image" />
            </DialogContent>
        </Dialog>    )
}

export {HireMeDialog}