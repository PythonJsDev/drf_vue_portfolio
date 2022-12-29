FROM python:3.10

# On désactive le buffer de la sortie standard pour que l'affichage se réalise en direct
ENV PYTHONUNBUFFERED 1
# On ne veut pas que python crée des fichiers *.pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Répertoire de travail
WORKDIR /app

# Installation des dépendances générales
RUN apt update && apt install --no-install-recommends -y \
    # construction des packages python  
    build-essential \
    # construction du paquet psycopg2
    libpq-dev \
    # suppression des fichiers non utilisés
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/*

# Installation des dépendances python
COPY ./portfolio/requirements.txt .
RUN pip install --no-cache-dir --no-index -r requirements.txt


COPY ./compose/local/django/entrypoint /entrypoint
# supprime les caractères LF non compris par bach
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./compose/local/django/start /start
# supprime les caractères non compris par bach
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

ENTRYPOINT [ "/entrypoint" ]
