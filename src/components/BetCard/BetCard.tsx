import {Collapse, Skeleton, Typography} from "@mui/material";
import Bet from "../../models/Bet";
import React, {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';

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
    StyledTypography,
    StyledTypographyTitle,
    StyledTypographyData
} from "./BetCard.styles";
import { Column, Row } from "../../styles/shared-styles";
import { Generic } from "../../models/Generic";
import { MatchService } from "../../services/MatchService";
import { useQuery } from "react-query";
import { format } from "date-fns";
import { StyledAvatar } from "../StyledAvatar/StyledAvatar";
import Option from "../../models/Option";


interface MatchCardProps {
    match: Generic
}

const TitleOdd = ({options, ...style}: { options?: Option[], style?: {} }) => {

    let count = 0;
    let end = false;
    return (
        <DescriptionLine {...style}>
            <Description> </Description> 
            {!!options ? options.map(({id, name, description, odd}) => {
                count++;
                if(count <= 3)
                    return (<Column>
                                <StyledTypographyTitle variant="body2">
                                    {name}
                                </StyledTypographyTitle>
                                <Odd>
                                    {odd?.toPrecision(4)}
                                </Odd>
                            </Column>
                        )
                else if(!end){
                    end = true;
                    return(<Column>
                        <StyledTypographyTitle variant="body2"></StyledTypographyTitle>
                        <StyledTypographyTitle variant="body2">
                            {"..."}
                        </StyledTypographyTitle>
                    </Column>
                    )
                }
            }) : null}
        </DescriptionLine>
    );
}



const DescriptionOdd = ({description, name, odd, ...style}: { description: string, name: string, odd: number, style?: {} }) => {

    return (
        <DescriptionLine {...style}>
            <Description>
                <Typography paragraph={true}>
                    {description?.slice(0, 80)}
                </Typography>
            </Description> 
            <DescriptionLine {...style}>
                <StyledTypographyTitle variant="body2">
                    {name}
                </StyledTypographyTitle>
                <Odd>
                    {odd?.toPrecision(4)}
                </Odd>
            </DescriptionLine>
        </DescriptionLine>
    );
}

const betService = new MatchService();

export default function MostRequestedBetCard({match}: MatchCardProps) {

    const [expanded, setExpanded] = useState(false);

    const {id, name, description, photo} = match;

    const convertdate = (myDate?:Date) => {
        return !!myDate ? format(myDate, "'finaliza ' dd/MM/yyyy', às' H:mm"): ""
    };

    //mostRequested: { createdAt, expiredAt, options }
    const { isLoading, error, data } = useQuery(['getMatchById',id], () => {return betService.getMatchById(id);});
    console.log(data)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledCard>
            <StyledCardContentHeader onClick={handleExpandClick}>
                <HeaderButton>
                    {/* <SportsVolleyballOutlinedIcon style={{backgroundColor: "#6B61F5", borderRadius: "20px", fontSize: "35px", padding: "5px", color: "white"}}></SportsVolleyballOutlinedIcon> */}
                    <StyledAvatar photoUrl={data?.photo} size={35} name={!!data?.name?data.name[0]:"M"} />
                    <Column>
                        <StyledTypographyTitle variant="body2">
                            {data?.name}
                        </StyledTypographyTitle>
                    </Column>
                    <EventTimeAndExpandMore>
                        {<ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon/>
                        </ExpandMore> }
                    </EventTimeAndExpandMore>
                </HeaderButton>
            </StyledCardContentHeader>

            {
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <StyledTypographyData paragraph={true}>
                            {data?.description}
                        </StyledTypographyData>
                        <StyledTypographyData>
                            {convertdate(  data?.expiredAt)}
                        </StyledTypographyData>
                        <BodyCardContent>
                        {!!data && !!data.options ? data.options.map(({id, name, description, odd}) => {
                                            return (
                                                <DescriptionOdd
                                                    key={id}
                                                    style={{
                                                        marginBottom: '5px'
                                                    }}
                                                    description={description}
                                                    name={name}
                                                    odd={odd}/>
                                            )
                                        }) : null}
                        </BodyCardContent>
                    </Collapse> 
            }

            <BodyCardContent>
                <TitleOdd
                    style={{
                        marginBottom: '5px'
                    }}
                    options={data?.options}/>
            </BodyCardContent>
        </StyledCard>
    );
}
