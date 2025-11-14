# Voir tous les conteneurs (actifs + arrêtés)
docker ps -a

# Supprimer un conteneur arrêté
docker rm <container_id>

# Supprimer tous les conteneurs arrêtés (confirmé)
docker container prune

# Voir toutes les image
docker images

# Supprimer une image
docker rmi <image_id>

# Supprimer toutes les images inutilisées (confirmé)
docker image prune -e 

# Construire une image Docker à partir d'un Dockerfile
docker build