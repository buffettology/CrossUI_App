/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { Doughnut as CJS2Doughnut } from "../web_modules/react-chartjs-2/index.js";
import { FormControl } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { InputLabel } from "../web_modules/material-ui/index.js";
import { InputAdornment } from "../web_modules/material-ui/index.js";
import { FormHelperText } from "../web_modules/material-ui/index.js";
import { Input } from "../web_modules/material-ui/index.js";
import { FilledInput } from "../web_modules/material-ui/index.js";
import { OutlinedInput } from "../web_modules/material-ui/index.js";
import { Checkbox } from "../web_modules/material-ui/index.js";
import { FormControlLabel } from "../web_modules/material-ui/index.js";
import { FormLabel } from "../web_modules/material-ui/index.js";
import { FormGroup } from "../web_modules/material-ui/index.js";

const rechartjs2_pie = {
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
        }]
    },
    options: {}
};

const useStyles4basic = makeStyles(theme => ({
  item : {
    margin: theme.spacing(1)
  },
  container : {
    padding: theme.spacing(1)
  }
}));
const Module = props => {
    const styles_basic = useStyles4basic(props||{});
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${CJS2Doughnut} data=${ rechartjs2_pie.data } options=${ rechartjs2_pie.options } key="4akyr07d">
                <${FormControl} className=${styles_basic.item} key="e5wjbau0">
                    <${InputLabel} shrink>
                        InputLabel
                    </${InputLabel}>
                    <${Input} value="Input" startAdornment=${html`<${InputAdornment} position='start'><${Icon}>account_circle</${Icon}></${InputAdornment}>`} endAdornment=${html`<${InputAdornment} position='start'><${Icon}>close</${Icon}></${InputAdornment}>`}>
                    </${Input}>
                    <${FormHelperText}>
                        FormHelperText
                    </${FormHelperText}>
                </${FormControl}>
            </${CJS2Doughnut}>
            <${Checkbox} defaultChecked color="primary" className=${styles_basic.item} key="hbbxfb2h">
            </${Checkbox}>
        </${React.Fragment}>
    `;
};

export default Module;