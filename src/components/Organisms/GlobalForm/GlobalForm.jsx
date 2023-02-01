import React from 'react'
import { Box, BoxTitle, Card, Form, Global, List, ListWrapper, Loader, LoaderWrapper } from './GlobalForm.styled'
import Title from '../../Atoms/Title/Title'
import Text from '../../Atoms/Text/Text'
import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Button/Button'
import {getInCss} from '../../../global/functions/getInCss'
import Icon from '../../Atoms/Icon/Icon'
import IconSelector from '../../Molecules/IconSelector/IconSelector'
import { useGlobalForm } from './useGlobalForm'

const GlobalForm = ({data : refObj, onChangeMenu}) => {

    const {reference, dispatch, state, handleSubmit, onSubmit, register, errors, getValues, setValue, confirmation, setConfirmation, onDelete} = useGlobalForm(refObj)

    return (
        <Global>
            <ListWrapper>
                <BoxTitle>
                    <Button small icon='left' color='transparent' onClick={() => onChangeMenu(-1)}></Button>
                    <Title level={2}> {`Liste des ${refObj.label}`}</Title>
                    <Button small icon='right' color='transparent' onClick={() => onChangeMenu(1)}></Button>
                </BoxTitle>
                <List>
                    {reference?
                        reference.map(ref => 
                            <Box key={ref._id} selected={state.selected === ref._id} >
                                <Card onClick={() => dispatch({type: 'edit', payload: ref._id})} selected={state.selected === ref._id}>
                                    {ref?.label &&          <Text className='label' type='important'> {ref.label}</Text>}
                                    {ref?.description &&    <Text className='description' > {ref.description}</Text>}
                                    {ref?.icon &&           <Icon field={ref.icon} className='icon' color={getInCss('--blueCoopalim')} />}
                                </Card>
                                <div className='delete'>
                                    <Button
                                        color={'transparent'}
                                        onClick={() => state.selected === ref._id && dispatch({type: 'delete', payload: ref._id})
                                                                                  /* :
                                                                                    dispatch({type: 'edit', payload: ref._id}) */
                                                }
                                        small
                                    >
                                        <Icon field='delete'  color={state.selected === ref._id ? getInCss('--redCoopalim') : '#ced4da'}
                                    /></Button>
                                    
                                </div>
                            </Box>)
                        :
                        <LoaderWrapper> <Loader /> </LoaderWrapper>
                    }
                    
                </List>
            </ListWrapper>

            <Form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
                <Title level={2}> {state.title}</Title>
                <div className='fields'>
                    {refObj.fields.map((ref, i) =>
                        ref.type === 'input' ? (<Input key={i} label={`${ref.label} :`} field={ref.name} icon="edit" tooltipLabel={ref?.tooltipLabel} className='label'
                                register={register} error={errors[ref.label]?.message} smallError={true} />)
                        :
                            <IconSelector
                                key={i}
                                field={ref.name}
                                register={register}
                                label={`${ref?.label} :`}
                                value={getValues(ref?.name)}
                                setValue={(value) => setValue(ref.name, value)}
                                />
                        
                    )}
                </div>

                <div className='control'>
                    {(state.mode==='edit' && !confirmation) &&
                    <>
                        <Button onClick={() => dispatch({type : 'create'})}>Annuler</Button>
                        <Button onClick={() => dispatch({type : 'from'})}> A partir de</Button>
                        <Button onClick={() => setConfirmation(true)}>Modifier</Button>
                    </>}
                    {(state.mode==='edit' && confirmation) && <>
                        <Button onClick={() => setConfirmation(false)} >Annuler</Button>
                        <Button type='submit' color={getInCss('--redCoopalim')} >Modifier</Button>
                    </>}
                    {state.mode==='create' && <>
                        <Button onClick={() => dispatch({type : 'create'})}> Annuler</Button>
                        <Button type='submit' >Créer</Button>
                    
                    </>}
                    {state.mode==='delete' && <>
                        <Button onClick={() =>{
                            dispatch({type : 'edit', payload : state.selected})
                        }}> Annuler</Button>
                        <Button color={getInCss('--redCoopalim')} onClick={() => onDelete(state.selected)}>Supprimer</Button>
                    
                    </>}
                </div>
            </Form>
        </Global>

    )
}

export default GlobalForm