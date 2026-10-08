const information = {
    ar: {
        title: "Augmented Reality (AR)",
        text: "AR enhances the real world by placing digital information, 3D models or interactive elements over the user's physical environment."
    },

    vr: {
        title: "Virtual Reality (VR)",
        text: "VR creates a computer-generated environment that surrounds the user and provides an immersive digital experience."
    },

    mr: {
        title: "Mixed Reality (MR)",
        text: "MR combines physical and digital environments and allows virtual objects to understand and interact with the surrounding physical space."
    }
};

function showInfo(type) {
    document.getElementById("modalTitle").textContent = information[type].title;
    document.getElementById("modalText").textContent = information[type].text;
    document.getElementById("modal").style.display = "flex";
}

function closeInfo() {
    document.getElementById("modal").style.display = "none";
}

function scrollToExplorer() {
    document.getElementById("explorer").scrollIntoView({
        behavior: "smooth"
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        closeInfo();
    }
};