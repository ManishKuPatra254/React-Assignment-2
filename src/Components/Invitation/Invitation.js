
export function Invitation(props) {
    return (
        <p>
            Subject : {props.birthday}
            <br />
            To : {props.email}
            <p>
                Hi , jaGdish
                <br /> <br />

                I am having a {props.party} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - {props.names}
            </p>

            <br />
            My house is behind our school , near {props.area}
            <br /> <br />
            I hope you will come and see you soon .
            <br /> <br />
            from , <br />
            {props.name}

        </p>
    )
}