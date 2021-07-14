import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

function AddUser(props) {
    function addUserSubmitHandler(event) {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;