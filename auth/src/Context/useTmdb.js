import React from "react";
import { useContext } from "react";
import TmdbContext from "./TmdbContext";

function useTmdb(){
    return useContext(TmdbContext)
}

export default useTmdb;