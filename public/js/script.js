//Referencing all the Subjects
const subjectsList = ["Science"]
const cardsLists = {}
const pageDisplayerIframe = document.getElementById("pageDisplayer")
const pageDisplayerIframeDocument = pageDisplayerIframe.contentWindow.document;

pageDisplayerIframe.onload = () => {
    //Updating cards lists to have each subject
    subjectsList.forEach(subject => cardsLists[subject] = pageDisplayerIframeDocument.getElementById(subject))

    //Adding onclick handler to each subject's chapters
    for (const subject in cardsLists) {
        if (Object.hasOwnProperty.call(cardsLists, subject)) {
            const currentSubject = cardsLists[subject];

            //Looping for each chapter
            for (let i = 0; i < currentSubject.children.length; i++) {
                const currentChapter = currentSubject.children[i]
                currentChapter.onclick = () => handleChapterPress(subject, i)
            }
        }
    }

}

function handleChapterPress(subject, chapterNumber) {
    //Chapter Number is a whole number
    console.log(data[subject][chapterNumber + 1])
    pageDisplayerIframe.src = "page/questionsPage.html"
}