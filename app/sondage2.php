<?php
global $pdo;
require_once 'includes/dbConnect.php';
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $confirm =  $_POST['answer'];
    if(isset($confirm)){
        $sql = 'INSERT INTO sondage_2(answers) VALUES (:confirm);';
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':confirm', $confirm, PDO::PARAM_STR);
        $exec = $stmt->execute();
        if($exec){
            header('Location: sondage3.php');
            exit();
        }
    }
}
require_once 'includes/header.php'; ?>
    <main>
        <section id="sondage2">
            <form action="" method="post">
                <div class="question">
                    <label>Pensez-vous que <strong>TSHISEKEDI</strong> merite sa <strong>place</strong>?</label>
                </div>
                <div class="btnSubmit">
                    <button name="answer" value="yes" data-value="yes" id="yes" type="submit" >OUI</button>
                    <button name="answer" value="no" data-value="no" id="no" type="submit" >NON</button>
                </div>
            </form>
        </section>
    </main>
<?php require_once 'includes/footer.php'; ?>
