#Webapp-ansible-apache

Karine Filiatreault 1
Travail pratique #2 : JavaScript
Pondération : 15 %
Travail obligatoirement en équipe de 2 à moins d’une entente préalable avec le professeur
Remise : Au plus tard jeudi le 2 juin avant minuit
1 Objectif
Développer 2 fonctionnalités asynchrones en utilisant JavaScript.
2 Visionneuse
Vous devez réaliser une visionneuse dont les images seront celles des planètes visitées dans un
film Star Wars. Des images sont fournies mais vous n’êtes pas obligé de les utiliser.
Vous devrez commencer par présenter une liste de quelques films de Star Wars (3 minimum) puis,
lorsque l’utilisateur choisi un film, démarrer une visionneuse qui alterne les images des
différentes planètes du film choisi.
Voici l’API qui vous permettra d’obtenir ses informations : https://swapi.dev/api
La visionneuse doit avoir les fonctionnalités suivantes :
o Cette page doit présenter les images en rotation. Il doit y avoir à la fois le nom de la planète
affichée et son image.
▪ Le nom de la planète doit être affiché par-dessus l’image (dans le bas)
o La visionneuse doit également afficher 3 boutons : Précédent, Suivant et Arrêter.
▪ Bouton Précédent :
• Permet à l’utilisateur d’afficher l’image précédente. Si l’utilisateur clique
sur ce bouton alors que la visionneuse affiche la première image, c’est la
dernière image qui doit s’afficher.
▪ Bouton Suivant :
• Permet à l’utilisateur d’afficher l’image suivante. Si l’utilisateur clique sur
ce bouton alors que la visionneuse affiche la dernière image, c’est la pre-
mière image qui doit s’afficher.
▪ Bouton Arrêter :
Karine Filiatreault 2
• Permet à l’utilisateur de désactiver la rotation automatique de la vision-
neuse. Lorsque l’utilisateur clique sur ce bouton, la rotation doit se désac-
tiver et le bouton doit afficher « Activer ».
• Lorsque la visionneuse est démarrée (bouton Activer), elle doit changer
d’image automatiquement à une vitesse déterminée par une liste dérou-
lante (ou des boutons radios) :
o Lent : 1500 millisecondes
o Moyen : 1000 millisecondes
o Rapide : 500 millisecondes
Attention ! Pour changer de vitesse, vous devrez stopper la minuterie cou-
rante et la redémarrer avec la nouvelle vitesse précisée.
• Lorsque le bouton « Arrêter » affiche « Activer », il doit permettre à l’utili-
sateur de réactiver la rotation de la visionneuse. Lorsque la rotation auto-
matique de la visionneuse est activée, le bouton doit afficher « Arrêter ».
o Si l’utilisateur sélectionne le bouton « Précédent » ou « Suivant » alors que la rotation
automatique est activée, le délai pour afficher la prochaine image doit être réinitialisé (la
prochaine image doit s’afficher x secondes après que l’utilisateur ait cliqué sur le bouton
– selon la vitesse déterminée plus haut).
3 Évolution des prix de l’essence
Vous devrez faire afficher un graphique de l’évolution du prix du pétrole sur différentes périodes
de temps selon les critères entrés par l’utilisateur.
L’utilisateur devra pouvoir choisir 3 options avant que le graphique s’affiche :
• Le type de monnaie
o Canada, France, Angleterre, Danemark, Egypte, Hungrie, Etc.
o Créer une liste à partir de l’API
• L’état américain pour lequel il veut voir les prix (avec leur code pour l’API) :
o New York : PET.EMM_EPM0_PTE_SNY_DPG.M
o Californie : PET.EMM_EPM0_PTE_SCA_DPG.M
o Floride : PET.EMM_EPM0_PTE_SFL_DPG.M
o Colorado : PET.EMM_EPM0_PTE_SCO_DPG.M
o Massachusetts : PET.EMM_EPM0_PTE_SMA_DPG.M
o Texas : PET.EMM_EPM0_PTE_STX_DPG.M
• La période de temps
o Début/fin : mois et année
