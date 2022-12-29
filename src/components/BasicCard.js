import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

export default function BasicCard(props) {
  return (
    <Card elevation={10} sx={{ minWidth: 150 }}>
      <CardContent color="secondary">
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <BasicTabs
        title={props.title}
        shortTitle={props.shortTitle}
        action={props.action}
      />
    </Card>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Yes" {...a11yProps(1)} />
          <Tab label="No" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>Details would go here about this subject</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.action}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>Details would go here about what to do for answering "No"</p>
      </TabPanel>
    </Box>
  );
}
