import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="py-10 lg:w-5/6 w-full mx-auto">
      <h1 className="text-4xl font-bold text-center">Blogs</h1>

      <div className="collapses">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-indigo-800 my-4"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              There are three ways to manage a state in a React application.
            </p>
            <ol>
              <li>useState</li>
              <li>useReducer</li>
              <li>useContext</li>
            </ol>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-indigo-800 my-4"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-plus border border-base-300 bg-indigo-800 my-4"
        >
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
            <p className="font-bold mt-4">Why should we write unit tests?</p>
            <ul className="mt-4">
              <li>
                Unit tests save time and money. Usually, we tend to test the
                happy path more than the unhappy path. If you release such an
                app without thorough testing, you would have to keep fixing
                issues raised by your potential users. The time to fix these
                issues could’ve been used to build new features or optimize the
                existing system. Bear in mind that fixing bugs without running
                tests could also introduce new bugs into the system.
              </li>
              <br />
              <li>
                Well-written unit tests act as documentation for your code. Any
                developer can quickly look at your tests and know the purpose of
                your functions. This is especially useful when you have a large
                codebase and you need to onboard new developers.
              </li>
              <br />
              <li>
                Unit tests help you refactor your code. If you have a
                well-written test suite, you can refactor your code without
                worrying about breaking it. This is because you can run your
                tests after every change you make to your code. If your tests
                pass, you can be sure that your code is working as intended.
              </li>
              <br />
              <li>
                Unit tests help you catch bugs early. If you have a well-written
                test suite, you can refactor your code without worrying about
                breaking it. This is because you can run your tests after every
                change you make to your code. If your tests pass, you can be
                sure that your code is working as intended.
              </li>
              <br />
              <li> It simplifies the debugging process.</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-indigo-800 my-4"
        >
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <ul>
              <li>
                <h3 className="text-3xl">React</h3>
                <br />
                <br />
                React doesn’t enforce a specific project structure, and as you
                can see from the official “Hello World” example below, you can
                start using React with just a few lines of code.
                <br />
                <br />
                React can be used as a UI library to render elements, without
                enforcing a specific project structure, and that’s why it’s not
                strictly a framework.
                <br />
                <br />
                React Elements are the smallest building blocks of React apps.
                They are more powerful than DOM elements because the React DOM
                makes sure to update them efficiently whenever something
                changes. Components are larger building blocks that define
                independent and reusable pieces to be used throughout the
                application.
                <br />
                <br />
                They accept inputs called props and produce elements that are
                then displayed to the user. React is based on JavaScript, but
                it’s mostly combined with JSX (JavaScript XML), a syntax
                extension that allows you to create elements that contain HTML
                and JavaScript at the same time. Anything you create with JSX
                could also be created with the React JavaScript API, but most
                developers prefer JSX because it’s more intuitive.
                <br />
                <br />
                <br />
                <br />
              </li>
              <li>
                <h3 className="text-3xl">Anguler</h3>
                <br />
                <br />
                In this article, I’m discussing Angular 2, and not the first
                version of the framework which is now known as AngularJS.
                <br />
                <br />
                AngularJS, the original framework, is an MVC
                (Model-View-Controller)) framework. But in Angular 2, there’s no
                strict association with MV*-patterns as it is also
                component-based.
                <br />
                <br />
                Projects in Angular are structured into Modules, Components, and
                Services. Each Angular application has at least one root
                component and one root module.
                <br />
                <br />
                Each component in Angular contains a Template, a Class that
                defines the application logic, and MetaData (Decorators). The
                metadata for a component tells Angular where to find the
                building blocks that it needs to create and present its view.
                <br />
                <br />
                Angular templates are written in HTML but can also include
                Angular template syntax with special directives to output
                reactive data and render multiple elements, among other things.
                <br />
                <br />
                Services in Angular are used by Components to delegate
                business-logic tasks such as fetching data or validating input.
                They are a distinct part of Angular applications. While Angular
                doesn’t enforce their use, it’s highly suggested to structure
                apps as a set of distinct services that can be reused.
                <br />
                <br />
                Angular is built in TypeScript, so its use is recommended to get
                the most seamless experience, but plain JavaScript is also
                supported.
                <br />
                <br />
                <br />
                <br />
              </li>
              <li>
                <h3 className="text-3xl">Vue</h3>
                <br />
                <br />
                The Vue.js core library focuses on the View layer only. It’s
                called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual framework.
                <br />
                <br />
                Although Vue is not strictly associated with the MVVM
                (Model-View-ViewModel) pattern, its design was partly inspired
                by it. With Vue, you’ll be working mostly on the ViewModel
                layer, to make sure that the application data is processed in a
                way that allows the framework to render an up-to-date View.
                <br />
                <br />
                Vue’s templating syntax lets you create View components, and it
                combines familiar HTML with special directives and features.
                This templating syntax is preferred, even though raw JavaScript
                and JSX are also supported.
                <br />
                <br />
                Components in Vue are small, self-contained, and can be reused
                throughout the application. Single File Components (SFCs) with
                the .vue extension contain HTML, CSS, and JavaScript so that all
                relevant code resides in one file.
                <br />
                <br />
                SFCs are the recommended way to organize code in Vue.js
                projects, especially larger ones. Tools such as Webpack or
                Browserify are required to transpile SFCs into working
                JavaScript code.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
