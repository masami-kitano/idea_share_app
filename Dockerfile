FROM ruby:2.4.5
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - && apt-get install -y nodejs

COPY . /app
WORKDIR /app
RUN gem update bundler
RUN bundle install                    
