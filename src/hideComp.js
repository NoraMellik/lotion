function hideComp(){
    return(
        <div style={{ display: currentHidden ? "block" : "none" }}>
      Toggled Element
    </div>
    );
}

export default hideComp;