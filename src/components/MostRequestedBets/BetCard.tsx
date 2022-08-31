import {Collapse, Typography} from "@mui/material";
import Bet from "../../models/Bet";
import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    BodyCardContent,
    Description,
    DescriptionLine,
    EventTimeAndExpandMore,
    ExpandMore,
    HeaderButton,
    Odd,
    StyledCard,
    StyledCardContentHeader,
    StyledTypography
} from "./BetCardStyles";


interface BetCardProps {
    bet: Bet
}

const DescriptionOdd = ({description, odd, ...style}: { description: string, odd: number, style?: {} }) => {

    return (
        <DescriptionLine {...style}>
            <Description>
                <Typography paragraph={true}>
                    {description.slice(0, 80)}
                </Typography>
            </Description>
            <Odd>
                {odd}
            </Odd>
        </DescriptionLine>
    );
}

export default function MostRequestedBetCard({bet}: BetCardProps) {

    const [expanded, setExpanded] = useState(false);

    const {odd, description, innerBets} = bet;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledCard>
            <StyledCardContentHeader onClick={handleExpandClick}>
                <HeaderButton>
                    <StyledTypography variant="body2">
                        Futebol
                    </StyledTypography>

                    <EventTimeAndExpandMore>
                        <StyledTypography paragraph={true}>
                            10/07 - 12:00
                        </StyledTypography>
                        {innerBets && innerBets.length > 0 ? <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon/>
                        </ExpandMore> : null}
                    </EventTimeAndExpandMore>
                </HeaderButton>
            </StyledCardContentHeader>

            {
                innerBets && innerBets.length > 0 ?
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <BodyCardContent>
                            {innerBets ? innerBets.map(({id, description, odd}) => {
                                return (
                                    <DescriptionOdd
                                        key={id}
                                        style={{
                                            marginBottom: '5px'
                                        }}
                                        description={description}
                                        odd={odd}/>
                                )
                            }) : null}


                        </BodyCardContent>
                    </Collapse> :
                    null
            }

            <BodyCardContent>
                <DescriptionOdd
                    description={description}
                    odd={odd}/>
            </BodyCardContent>
        </StyledCard>
    );
}
